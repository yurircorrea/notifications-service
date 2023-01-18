import { Injectable } from "@nestjs/common"
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CountRecipientNotificationsRequest {
    recipíentId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;
}

@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse> {
        const { recipíentId } = request;

        const count = await this.notificationsRepository.countManyByRecipientId(recipíentId);
        
        return{
            count,
        }
    }
}