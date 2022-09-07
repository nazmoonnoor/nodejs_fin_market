import NodeCache from "node-cache";

type CacheKey = string | number;

class LocalCache {
	private static instance: LocalCache;

	private cache: NodeCache;

	private constructor(ttlSeconds: number) {
		this.cache = new NodeCache({
			stdTTL: ttlSeconds,
			checkperiod: ttlSeconds * 0.2,
		});
	}

	public static getInstance(): LocalCache {
		if (!LocalCache.instance) {
			LocalCache.instance = new LocalCache(1000);
		}

		return LocalCache.instance;
	}

	public get<T>(key: CacheKey): T | undefined {
		return this.cache.get(key);
	}

	public set<T>(key: CacheKey, data: T): void {
		this.cache.set(key, data);
	}

	public unset(key: CacheKey): void {
		this.cache.del(key);
	}

	public hasKey(key: CacheKey): boolean {
		return this.cache.has(key);
	}
}

export default LocalCache.getInstance();
