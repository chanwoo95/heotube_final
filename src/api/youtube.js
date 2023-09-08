export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#search(keyword) : this.#mostPopular();
  }

  #search(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          regiondCode: "KR",
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 10,
          regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }

  async channelInfo(channelId) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet,statistics",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async categoryVideos(categoryId) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          videoCategoryId: categoryId,
          maxResults: 10,
          regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }
}
