const mockData: any = {};
mockData.videoDetails = {
  1: {
    title: "Clean code by Uncle Bob",
    description:
      "Coding Better World Together is a set of master lessons from the famous Uncle Bob (Robert Cecil Martin), where he gives us a broad vision of the importance and future of Software in today's society.",
    length: "10:00",
    url: "video.com/video/hd/clean_code_by_uncle_bob.mp4"
  },
  2: {}
};
mockData.videoRecomendation = {
  111: [
    {
      title: "Clean code by Uncle Bob : Lesson 1",
      description:
        "Coding Better World Together is a set of master lessons from the famous Uncle Bob (Robert Cecil Martin), where he gives us a broad vision of the importance and future of Software in today's society.",
      length: "10:00",
      url: "video.com/video/hd/clean_code_by_uncle_bob_lesson_1.mp4"
    },
    {
      title: "Clean code by Uncle Bob : Lesson 2",
      description:
        "Coding Better World Together is a set of master lessons from the famous Uncle Bob (Robert Cecil Martin), where he gives us a broad vision of the importance and future of Software in today's society.",
      length: "10:00",
      url: "video.com/video/hd/clean_code_by_uncle_bob_lesson_2.mp4"
    },
    {
      title: "Clean code by Uncle Bob : Lesson 3",
      description:
        "Coding Better World Together is a set of master lessons from the famous Uncle Bob (Robert Cecil Martin), where he gives us a broad vision of the importance and future of Software in today's society.",
      length: "10:00",
      url: "video.com/video/hd/clean_code_by_uncle_bob_lesson_3.mp4"
    },
    {
      title: "Clean code by Uncle Bob : Lesson 4",
      description:
        "Coding Better World Together is a set of master lessons from the famous Uncle Bob (Robert Cecil Martin), where he gives us a broad vision of the importance and future of Software in today's society.",
      length: "10:00",
      url: "video.com/video/hd/clean_code_by_uncle_bob_lesson_4.mp4"
    }
  ]
};
mockData.commentsList = {
  1: [
    {
      messagerName: "someone_1",
      id: 1,
      message: "Very good",
      timestamp: 1635496308888
    },
    {
      messagerName: "someone_2",
      id: 2,
      message: "Very good,must watch",
      timestamp: 1635496309999,
      reply: [
        {
          messagerName: "someone_10",
          id: 10,
          message: "you are right",
          timestamp: 163549635555
        }
      ]
    },
    {
      messagerName: "someone_3",
      id: 3,
      message: "Very good,ever applicable",
      timestamp: 163549637777
    }
  ],
  2: []
};
export const getVideoDetails = (videoId: number) => {
  return mockData.videoDetails[videoId];
};

export const getVideoRecomendation = (userId: number) => {
  return mockData.videoRecomendation[userId];
};

export const getCommentsList = (videoId: number) => {
  return mockData.commentsList[videoId];
};
