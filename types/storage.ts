type LogoItem = {
  src: string;
  aspectRatio?: number; // 1 à ..., default 1
};

export type StorageType = {
  logo: {
    navbar: LogoItem;
    square?: LogoItem;
  };
  backgroundImageDark?: LogoItem;
  backgroundImageLight?: LogoItem;
  header?: LogoItem;
};

export const storageLocal108: StorageType = {
  logo: {
    navbar: {
      src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/local-108%2Fcompagny-logo.png?alt=media&token=5476600d-8963-41ce-a3be-a792ae4cc3e7",
      aspectRatio: 2,
    },
    square: {
      src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/local-108%2Flogo-navbar.png?alt=media&token=a9f09717-ea51-46e9-bbf3-d54cc0997d6a",
      aspectRatio: 1.5,
    },
  },
  backgroundImageDark: {
    src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/local-108%2Fpeople-health-meditation-yoga-733396b43f344632093a30c39719befa.jpg?alt=media&token=ade5123a-6c18-4037-b69b-064fb3b3a5c1",
  },
  backgroundImageLight: {
    src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/local-108%2F1171166-yoga-desktop-wallpaper-1920x1080-for-samsung.jpg?alt=media&token=ad35c853-62b9-4360-81a3-d4f240fc07a9",
  },

  header: {
    src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/local-108%2Ftitle-logo-notext.png?alt=media&token=634f6948-e9d0-48ff-8c22-5fd51a8e9e88",
    aspectRatio: 1.3,
  },
};