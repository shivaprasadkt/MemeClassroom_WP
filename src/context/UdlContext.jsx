import React, { createContext, useContext, useState, useEffect } from "react";

const UdlContext = createContext();

export const UdlProvider = ({ children }) => {
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);
  const [fontSizeAdjustment, setFontSizeAdjustment] = useState("normal"); // "normal" | "large" | "extra-large"
  const [closedCaptionsEnabled, setClosedCaptionsEnabled] = useState(true);

  // Sync settings with localStorage for user persistence
  useEffect(() => {
    const saved = localStorage.getItem("udl_settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHighContrastMode(parsed.highContrastMode ?? false);
        setTextToSpeechEnabled(parsed.textToSpeechEnabled ?? false);
        setFontSizeAdjustment(parsed.fontSizeAdjustment ?? "normal");
        setClosedCaptionsEnabled(parsed.closedCaptionsEnabled ?? true);
      } catch (e) {
        console.error("Failed to parse UDL settings", e);
      }
    }
  }, []);

  const saveSettings = (newSettings) => {
    localStorage.setItem("udl_settings", JSON.stringify(newSettings));
  };

  const toggleHighContrast = () => {
    setHighContrastMode(prev => {
      const next = !prev;
      saveSettings({ highContrastMode: next, textToSpeechEnabled, fontSizeAdjustment, closedCaptionsEnabled });
      return next;
    });
  };

  const toggleTextToSpeech = () => {
    setTextToSpeechEnabled(prev => {
      const next = !prev;
      saveSettings({ highContrastMode, textToSpeechEnabled: next, fontSizeAdjustment, closedCaptionsEnabled });
      return next;
    });
  };

  const changeFontSize = (level) => {
    setFontSizeAdjustment(level);
    saveSettings({ highContrastMode, textToSpeechEnabled, fontSizeAdjustment: level, closedCaptionsEnabled });
  };

  const toggleClosedCaptions = () => {
    setClosedCaptionsEnabled(prev => {
      const next = !prev;
      saveSettings({ highContrastMode, textToSpeechEnabled, fontSizeAdjustment, closedCaptionsEnabled: next });
      return next;
    });
  };

  return (
    <UdlContext.Provider value={{
      highContrastMode,
      textToSpeechEnabled,
      fontSizeAdjustment,
      closedCaptionsEnabled,
      toggleHighContrast,
      toggleTextToSpeech,
      changeFontSize,
      toggleClosedCaptions
    }}>
      {children}
    </UdlContext.Provider>
  );
};

export const useUdl = () => {
  const context = useContext(UdlContext);
  if (!context) {
    throw new Error("useUdl must be used within a UdlProvider");
  }
  return context;
};
