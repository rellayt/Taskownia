import { StoreManagement } from './store-management.abstract';
import { ChatService, chatService } from '../services/chat.service';
import { ChatQuery, chatQuery, ChatStore, chatStore } from '../state/chat.store';
import { ChatEntityState, ChatState } from '../models/Chat.model';
import { Message } from '../../../models/Message.model';
import { asNonUndefined } from '../../base/utility/asNonUndefined';
import { authFacade, AuthFacade } from './auth.facade';

export class ChatFacade extends StoreManagement<ChatStore, ChatService, ChatQuery, ChatState, ChatEntityState> {
	readonly messages$ = this.baseQuery.messages$;

	readonly isProcessing$ = this.baseQuery.isProcessing$;

	constructor(
		protected chatService: ChatService,
		protected chatStore: ChatStore,
		protected chatQuery: ChatQuery,
		private authFacade: AuthFacade
	) {
		super(chatService, chatStore, chatQuery);
	}

	async sendMessage(message: string) {
		await this.baseAsyncHandler(async () => {
			const { data } = await this.baseService.sendMessage(message);
			this.updateStateEntity('messages', this.parseMessages(data));
		});
	}

	async getMessages() {
		await this.baseAsyncHandler(async () => {
			const { data } = await this.baseService.getMessages();
			this.updateStateEntity('messages', this.parseMessages(data));
		});
	}

	resetMessages(): void {
		this.updateStateEntity('messages', []);
	}

	private parseMessages(data: Message[]): Message[] {
		const currentUserId = this.authFacade.getUserId();

		return data.map(({ userUsername, date, message, userId }) => ({
			username: asNonUndefined(userUsername),
			date: new Date(date),
			message,
			isMyMessage: asNonUndefined(userId) === currentUserId,
		}));
	}
}

// // @todo - this should be part of a formal DI system
export const chatFacade = new ChatFacade(chatService, chatStore, chatQuery, authFacade);
