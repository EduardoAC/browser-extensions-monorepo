/**
 * Chrome runtime message still using the callback approach for messages
 * to align with more actual practises we have wrapped it into a promise
 * allowing to manage it easier
 * @param message
 * @returns Promise<Message>
 */
export function sendMessage(message: Message) {
  return new Promise<Message>((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(message, (response: Message) => {
        if (response.type === MessageType.ERROR) {
          reject(response.data);
        } else {
          resolve(response.data);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
