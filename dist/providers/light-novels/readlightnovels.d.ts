import { LightNovelParser, ISearch, ILightNovelInfo, ILightNovelChapterContent, ILightNovelResult } from '../../models';
import { LightNovelSortBy } from '../../models/types';
declare class ReadLightNovels extends LightNovelParser {
    readonly name = "Read Light Novels";
    protected baseUrl: string;
    protected logo: string;
    protected classPath: string;
    /**
     *
     * @param lightNovelUrl light novel link or id
     * @param chapterPage chapter page number (optional) if not provided, will fetch all chapter pages.
     */
    fetchLightNovelInfo: (lightNovelUrl: string, chapterPage?: number) => Promise<ILightNovelInfo>;
    private fetchChapters;
    private fetchAllChapters;
    /**
     *
     * @param chapterId chapter id or url
     */
    fetchChapterContent: (chapterId: string) => Promise<ILightNovelChapterContent>;
    /**
     *
     * @param query search query string
     * @param page page number
     */
    search: (query: string, page?: number) => Promise<ISearch<ILightNovelResult>>;
    fetchNewNovels: (page?: number) => Promise<ISearch<ILightNovelResult>>;
    fetchLatestRelease: (page?: number) => Promise<ISearch<ILightNovelResult>>;
    fetchMostPopular: (page?: number) => Promise<ISearch<ILightNovelResult>>;
    fetchCompleteNovels: (page?: number) => Promise<ISearch<ILightNovelResult>>;
    fetchGenreNovels: (genreID: string, page?: number, sortBy?: LightNovelSortBy) => Promise<ISearch<ILightNovelResult>>;
    fetchGenreList: () => Promise<{
        id: string | undefined;
        title: string | undefined;
    }[]>;
}
export default ReadLightNovels;
