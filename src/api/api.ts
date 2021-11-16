interface VideoResponse {
  data: string[];
}

export const getVideos = () => {
  return new Promise<VideoResponse>(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          '2021102210532300000044183',
          '2021102210555300000097281',
          '2021102210591600000008186',
          '2021102211051200000036370',
          '2021102211072900000078651',
          '2021102211103700000057811',
        ],
      });
    }, 500);
  });
};
