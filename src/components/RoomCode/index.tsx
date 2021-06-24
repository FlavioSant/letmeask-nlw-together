import { useCallback } from "react";
import { FiCopy } from "react-icons/fi";

import { RoomCodeButton } from "./styles";

interface RoomCodeProps {
  code: string;
}

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <FiCopy size={24} color="#fff" />
      </div>
      <span>Sala #{code}</span>
    </RoomCodeButton>
  );
};

export { RoomCode };
