/* eslint-disable  */
import React from 'react';
import { StartTimeEvent } from './ScheduleMeeting';
import { ThemedButton } from '../ThemedButton';
import { format } from 'date-fns';
import styled from 'styled-components';

type Props = {
  onStartTimeSelect: () => void;
  startTimeEvent: StartTimeEvent;
  selected?: boolean;
  onCancelClicked: () => void;
  borderRadius: number;
  primaryColor: string;
  primaryColorFaded: string;
  format_startTimeFormatString: string;
  lang_confirmButtonText: string;
  lang_cancelButtonText: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CancelButton = styled.button<{ borderRadius: number }>`
  padding: 8px 24px;
  border: none;
  background-color: rgb(0, 0, 0, 0);
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 100%;
  color: #222320;
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const StartTimeListItem: React.FC<Props> = ({
  onStartTimeSelect,
  startTimeEvent,
  selected,
  onCancelClicked,
  borderRadius,
  primaryColor,
  primaryColorFaded,
  format_startTimeFormatString,
  lang_confirmButtonText,
  lang_cancelButtonText,
}) => {
  return (
    <Container className="rsm-start-time-item">
      <ThemedButton
        type="button"
        className="rsm-confirm-button"
        selected={Boolean(selected)}
        borderRadius={borderRadius}
        primaryColorFaded={primaryColorFaded}
        primaryColor={primaryColor}
        onClick={onStartTimeSelect}
      >
        {selected && `${lang_confirmButtonText} `}
        {format(startTimeEvent.startTime, format_startTimeFormatString)}
      </ThemedButton>
      {selected && (
        <CancelButton type="button" className="rsm-cancel-button" borderRadius={borderRadius} onClick={onCancelClicked}>
          {lang_cancelButtonText}
        </CancelButton>
      )}
    </Container>
  );
};

export default StartTimeListItem;
