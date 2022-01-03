import { ReactElement } from 'react';
import { Content, DateField, MessageInner, MessageWrapper, Name, Wrapper } from './ChannelMessage.styles';
import { Message } from '../../../models/Message.model';
import { asNonUndefined } from '../../../core/base/utility/asNonUndefined';
import { isToday } from '../../../helpers/is-today';
import Moment from 'react-moment';

interface MessageProps {
	message: Message;
}

const ChannelMessage = ({ message: { isMyMessage, message, date, username } }: MessageProps): ReactElement => {
	return (
		<MessageWrapper isMyMessage={asNonUndefined(isMyMessage)}>
			<MessageInner isMyMessage={asNonUndefined(isMyMessage)}>
				<Name>{isMyMessage ? 'You' : username}</Name>
				<Content>{message}</Content>
				<DateField>
					<Moment format={isToday(date) ? 'HH:mm' : 'DD/MM HH:mm'}>{date}</Moment>
				</DateField>
			</MessageInner>
		</MessageWrapper>
	);
};

export default ChannelMessage;
