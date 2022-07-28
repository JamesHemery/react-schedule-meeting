import React from 'react';
import { StartTimeEvent } from './ScheduleMeeting';
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
  startTimeFormatString: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

type ButtonProps = {
  selected: boolean;
  primaryColor: string;
  borderRadius: number;
  primaryColorFaded: string;
};

const Button = styled.button<ButtonProps>`
  padding: 16px;
  border: none;
  color: ${({ selected }) => (selected ? `rgb(255, 255, 255)` : `rgb(20,20,20)`)};
  background-color: ${({ selected, primaryColor }) => (selected ? primaryColor : `rgba(0,0,0,0)`)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  :hover {
    opacity: 0.8;
    background-color: ${({ selected, primaryColor, primaryColorFaded }) =>
      selected ? primaryColor : primaryColorFaded};
  }
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

const EventListItem: React.FC<Props> = ({
  onStartTimeSelect,
  startTimeEvent,
  selected,
  onCancelClicked,
  borderRadius,
  primaryColor,
  primaryColorFaded,
  startTimeFormatString,
}) => {
  return (
    <Container>
      <Button
        selected={Boolean(selected)}
        borderRadius={borderRadius}
        primaryColorFaded={primaryColorFaded}
        primaryColor={primaryColor}
        onClick={onStartTimeSelect}
      >
        {selected && 'Confirm '}
        {format(startTimeEvent.startTime, startTimeFormatString)}
      </Button>
      {selected && (
        <CancelButton borderRadius={borderRadius} onClick={onCancelClicked}>
          Cancel
        </CancelButton>
      )}
    </Container>
  );
};

export default EventListItem;
