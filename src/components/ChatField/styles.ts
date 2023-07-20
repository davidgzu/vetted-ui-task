import styled from 'styled-components';

export interface IChatFieldProps {
	isAssign?: boolean;
}

export const InputContainer = styled.div<IChatFieldProps>`
	position: relative;
	display: inline-block;
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: ${(props) => (props.isAssign ? '2px solid #6B42EE;' : 'unset')};
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
	height: 56px;
	padding: 0 16px;
	width: 642px;
	background: #fff;
	border-radius: 12px;
`;

export const StyledInput = styled.input`
	width: 98%;
	height: 80%;
	border-radius: 12px;
	background: #fff;
	border-color: transparent;
	padding-right: 70px;
	font-family: DM Sans;
	font-size: 16px;

	&:focus {
		outline: none;
	}
`;

export const ComponentPlaceholder = styled.div`
	width: 50%;
`;

export const ButtonAsign = styled.button`
	border-radius: 26px;
	background: #f6f6f4;
	width: 226px;
	height: 32px;
	flex-shrink: 0;
	color: #000;
	text-align: center;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	padding: 0;
`;

export const AssignImg = styled.img`
	margin-right: 5px;
`;

export const SendImg = styled.img``;

export const SubmitButton = styled.button`
	padding: 0;
	width: 35px;
	height: 35px;
	flex-shrink: 0;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f6f6f4;
`;

export const ProfileBadge = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProfileBadgeContainer = styled.div`
	width: 100px;
	height: 32px;
	flex-shrink: 0;
	border-radius: 26px;
	background: #f6f6f4;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const ReplyText = styled.p`
	color: #000;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	opacity: 0.20000000298023224;
`;

export const ProfileImg = styled.img`
	width: 24px;
	height: 24px;
	flex-shrink: 0;
	border-radius: 24px;
	opacity: 0.4000000059604645;
	background: url(<path-to-image>), lightgray 50% / cover no-repeat, #c4c4c4;
`;

export const ProfileName = styled.p`
	color: #000;
	text-align: center;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	opacity: 0.20000000298023224;
`;
