import { Content } from "./content";
import { Notification } from "./notification";

describe('notification content', () => {

    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Você recebeu uma solicitação!'),
            category: 'social',
            recipientId: 'example-recipient-id'
        });
    
        expect(notification).toBeTruthy();
    })
})

