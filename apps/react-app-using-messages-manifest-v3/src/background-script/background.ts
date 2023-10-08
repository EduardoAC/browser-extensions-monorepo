// Will listen for message from the content scripts
chrome.runtime.onMessage.addListener(
  (message: Message, sender, sendResponse) => {
    switch (message.type) {
      case MessageType.FETCH:
        sendResponse('I heard you, on my way');
        break;
    }
  }
);
