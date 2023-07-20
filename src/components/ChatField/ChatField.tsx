import { SetStateAction, useEffect, useState } from 'react';
import {
  ButtonAsign,
  ComponentPlaceholder,
  InputContainer,
  StyledInput,
  AssignImg,
  SubmitButton,
  SendImg,
  ProfileBadge,
  ReplyText,
  ProfileBadgeContainer,
  ProfileImg,
  ProfileName,
} from './styles';
import AssignIcon from '../../assets/assign-icon.svg';
import SendIcon from '../../assets/send-icon.svg';

export type User = {
  name: string;
  img: string;
};

interface IChatFieldProps {
  user: User;
  onChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void
  submit: () => void;
}

const ChatField = ({ user, onChange: handleChange, submit }: IChatFieldProps) => {


  const [assigned, setAssigned] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>({
    name: '',
    img: '',
  });

  useEffect(() => {
    setAssigned(false);
  }, []);

  const AsignToMe = () => {
    setAssigned(!assigned);
    setUserData(user);
  };

  const AssignBtn = () => {
    if (!assigned) {
      return (
        <ButtonAsign onClick={AsignToMe}>
          <AssignImg src={AssignIcon} />
          Assign myself and reply
        </ButtonAsign>
      );
    } else {
      return (
        <ProfileBadge>
          <ReplyText>Repling as</ReplyText>
          <ProfileBadgeContainer>
            <ProfileImg src={userData.img} />
            <ProfileName>{userData.name}</ProfileName>
          </ProfileBadgeContainer>
        </ProfileBadge>
      );
    }
  };

  return (
    <InputContainer isAssign={assigned}>
      <ComponentPlaceholder>
        <AssignBtn />
      </ComponentPlaceholder>
      <StyledInput
        type='text'
        disabled={!assigned}
        onChange={handleChange}
      />
      <SubmitButton
        type='submit'
        onClick={submit}
        disabled={!assigned}
      >
        <SendImg src={SendIcon} />
      </SubmitButton>
    </InputContainer>
  );
};

export default ChatField;
