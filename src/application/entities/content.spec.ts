import { Content } from "./content"

describe('notification content', () => {

    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma solicitação!');
    
        expect(content).toBeTruthy();
    })
    
    it('should not be able to create a notification content with less then 5 characters', () => {
        expect(() => new Content('a')).toThrow();
    }) 
    
    it('should not be able to create a notification content with more then 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    })
}) 

 