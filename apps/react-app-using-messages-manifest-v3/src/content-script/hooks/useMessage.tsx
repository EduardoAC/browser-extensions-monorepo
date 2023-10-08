import React, { useCallback, useEffect, useState } from 'react';
import { sendMessage } from '../utils/sendMessage';

export function useMessage(message: Message) {
  const [status, setStatus] = useState<MessageStatus>(MessageStatus.IDLE);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const retry = useCallback(() => {
    if (status !== MessageStatus.PENDING) {
      setStatus(MessageStatus.IDLE);
    }
  }, [status]);

  useEffect(() => {
    async function handleMessage(message: Message) {
      try {
        setStatus(MessageStatus.SENT);
        const responseData = await sendMessage(message);
        setData(responseData);
        setStatus(MessageStatus.RECEIVED);
      } catch (error: any) {
        setStatus(MessageStatus.ERROR);
        setError(error);
      }
    }
    if (status === MessageStatus.IDLE) {
      setStatus(MessageStatus.PENDING);
      handleMessage(message);
    }
  }, [message, status]);
  return { status, data, error, retry };
}
