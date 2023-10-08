enum MessageStatus {
  IDLE,
  SENT,
  PENDING,
  RECEIVED,
  ERROR,
}

enum MessageType {
  FETCH,
  ERROR,
}

interface Message {
  type: MessageType;
  data: any;
}
