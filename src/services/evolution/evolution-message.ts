export interface EvolutionMessage {
	id: string;
	key: {
		id: string;
		fromMe: false;
		remoteJid: string;
		participant: string;
		addressingMode: string;
		participantAlt: string;
	};
	pushName: string;
	messageType: string;
	message: {
		conversation: string;
		messageContextInfo: {
			messageSecret: string;
		};
	};
	messageTimestamp: number;
	instanceId: string;
	source: "android" | "ios";
	contextInfo: null;
	MessageUpdate: [];
}
