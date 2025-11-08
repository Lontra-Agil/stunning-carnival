// 1. Definição dos Níveis de Log (Enum)
export enum LogLevel {
	INFO = 1,
	WARN = 2,
	ERROR = 3,
}

// 2. Interface para padronizar as mensagens (opcional, mas recomendado)
interface LogMessage {
	level: LogLevel;
	timestamp: string;
	message: string;
	context?: string; // Por exemplo, o nome da classe ou módulo
	data?: unknown; // Dados adicionais para log estruturado
}

// 3. A Classe Logger Principal
export class LoggerService {
	private minLevel: LogLevel;
	private context: string;

	constructor(context = "APP", minLevel: LogLevel = LogLevel.INFO) {
		this.context = context;
		this.minLevel = minLevel;
	}

	/**
	 * Define o nível mínimo de log para a instância.
	 * Somente as mensagens com nível >= minLevel serão exibidas.
	 */
	public setMinLevel(level: LogLevel): void {
		this.minLevel = level;
	}

	// Método privado para processar e formatar a mensagem
	private log(level: LogLevel, message: string, data?: unknown): void {
		if (level >= this.minLevel) {
			const logEntry: LogMessage = {
				level,
				timestamp: new Date().toISOString(),
				message,
				context: this.context,
				data,
			};

			const formattedMessage = `[${logEntry.timestamp}] [${LogLevel[level]}] [${logEntry.context}] - ${logEntry.message}`;

			// Usa o console apropriado para cada nível
			switch (level) {
				case LogLevel.INFO:
					console.info(
						formattedMessage,
						JSON.stringify(logEntry.data, null, 2) || "",
					);
					break;
				case LogLevel.WARN:
					console.warn(
						formattedMessage,
						JSON.stringify(logEntry.data, null, 2) || "",
					);
					break;
				case LogLevel.ERROR:
					console.error(
						formattedMessage,
						JSON.stringify(logEntry.data, null, 2) || "",
					);
					break;
				default:
					console.info(
						formattedMessage,
						JSON.stringify(logEntry.data, null, 2) || "",
					);
					break;
			}
		}
	}

	public info(message: string, data?: unknown): void {
		this.log(LogLevel.INFO, message, data);
	}

	public warn(message: string, data?: unknown): void {
		this.log(LogLevel.WARN, message, data);
	}

	public error(message: string, data?: unknown): void {
		this.log(LogLevel.ERROR, message, data);
	}
}
