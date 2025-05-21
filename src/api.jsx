import { setLocalStorageItem } from "./localStorage";

const apiUrl = import.meta.env.VITE_FIREBASE_DATABASE_URL

export async function fetchData(endpoint) {
  const url = `${apiUrl}/${endpoint}.json`;
  // console.log("GET", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Não foi possível obter os dados da API.");
  }
  return response.json();
}


export async function postData(endpoint, data) {
  const url = `${apiUrl}/${endpoint}.json`;
  console.log("POST", url, data);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Erro ao enviar os dados para a API.");
  }
  return response.json();
}

// Store
export async function getStoreInfoData() {
  try {
    // const storeInfoData = await fetchData('/storeInfo')
    const storeInfoData = {
      id: "09876544567",
      name: "Orion Sale",
      fullName: "Orion Sale - Ecommerce",
      logo: "https://via.placeholder.com/100x50",
      address: [],
    };

    setLocalStorageItem("store", storeInfoData);
    return storeInfoData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de storeInfo:", error);
    throw error;
  }
}

export async function sendStoreInfoData(newStoreInfo) {
  try {
    // const response = await postData('/storeInfo', newStoreInfo)

    return response;
  } catch (error) {
    console.error("Ocorreu um erro ao enviar dados de storeInfo:", error);
    throw error;
  }
}

// HomeOrder
export async function getMainPageSectionsOrderData() {
  try {
    // const mainPageSectionsData = await postData('/mainPageSections', newStoreInfo)

    const homePageOrderData = [
      {
        id: "983792837492",
        sectionName: "section-BannerHighlight",
        order: 1,
      },
      {
        id: "983792837492",
        sectionName: "section-BannerAdvantadges",
        order: 2,
      },
      {
        id: "983792837492",
        sectionName: "section-BannerHighlights",
        order: 3,
      },
      {
        id: "983792837492",
        sectionName: "section-BannerCards",
        order: 3,
      },
      {
        id: "983792837492",
        sectionName: "section-Categories",
        order: 4,
      },
      {
        id: "983792837492",
        sectionName: "section-ProductHighlight",
        order: 5,
      },
      {
        id: "983792837492",
        sectionName: "section-ProductHighlight2",
        order: 6,
      },
      {
        id: "983792837492",
        sectionName: "section-ProductSubHighlight",
        order: 7,
      },
      {
        id: "983792837492",
        sectionName: "section-BannerCheckOut",
        order: 8,
      },
      {
        id: "983792837492",
        sectionName: "section-ProductAdditional",
        order: 9,
      },
      {
        id: "983792837492",
        sectionName: "section-BannerQuickAds",
        order: 10,
      },
    ];

    setLocalStorageItem("homePageOrder", homePageOrderData);
    return homePageOrderData;
  } catch (error) {
    console.error(
      "Ocorreu um erro ao obter dados de homePageOrderData:",
      error
    );
    throw error;
  }
}

// ProductSections
export async function getMainPageSectionsData() {
  try {
    // const mainPageSectionsData = await postData('/mainPageSections', newStoreInfo)

    const mainPageSectionsData = [
      {
        id: "098765434567890",
        sectionName: "section-ProductHighlight",
        name: "Destaque",
        order: 1,
        type: "list",
        products: [
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: "produtoQuerido",
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-ProductHighlight2",
        name: "Destaque",
        order: 1,
        type: "list",
        products: [
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: "produtoQuerido",
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-ProductSubHighlight",
        name: "Destaque",
        order: 2,
        type: "carousel",
        products: [
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-ProductAdditional",
        name: "Highlight",
        order: 3,
        type: "carousel",
        products: [
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
          {
            id: "98765456789",
            name: "Bose Soundlink Color II",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1",
            price: "$9.99",
            oldPrice: "$10.99",
            friendlyUrl: null,
          },
        ],
      },
    ];

    return mainPageSectionsData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de mainPageSections:", error);
    throw error;
  }
}

// BannerSection
export async function getMainPageBannerData() {
  try {
    const mainPageBannerData = [
      {
        id: "098765434567890",
        sectionName: "section-BannerHighlight",
        kind: "highlight",
        name: "Destaque",
        order: 44,
        width: "dddd",
        banners: [
          {
            id: "7654567534",
            name: "null",
            order: 1,
            url: "https://picsum.photos/1700/500",
            link: null,
          },
          {
            id: "7654567534",
            name: "null",
            order: 2,
            url: "https://picsum.photos/1700/500",
            link: null,
          },
          {
            id: "7654567534",
            name: "null",
            order: 3,
            url: "https://picsum.photos/1700/500",
            link: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-BannerHighlights",
        kind: "peak",
        name: "QuickAds",
        order: 4,
        width: "fullfill",
        banners: [
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/300/500",
            link: null,
          },
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/300/500",
            link: null,
          },
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/300/500",
            link: null,
          },
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/300/500",
            link: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-BannerCards",
        kind: "card",
        name: "QuickAds",
        order: 5,
        width: "fullfill",
        banners: [
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/100/100",
            link: null,
          },
          {
            id: "7654567534",
            name: "Games",
            order: 1,
            url: "https://picsum.photos/100/100",
            link: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-BannerQuickAds",
        kind: "single",
        name: "QuickAds",
        order: 9,
        width: "fullfill",
        banners: [
          {
            id: "7654567534",
            name: "null",
            order: 1,
            url: "https://via.placeholder.com/1200x250",
            link: null,
          },
        ],
      },
      {
        id: "098765434567890",
        sectionName: "section-BannerCheckOut",
        kind: "double",
        name: "CheckOut",
        order: 15,
        width: "fullfill",
        banners: [
          {
            id: "7654567534",
            name: "Envios até 48h",
            description: "Ofertas do final de semana",
            order: 1,
            url: "https://picsum.photos/600/300",
            link: "/categories",
          },
          {
            id: "7654567534",
            name: "Envios até 48h",
            description: "Só até sexta-feira!",
            order: 2,
            url: "https://picsum.photos/600/300",
            link: "/categories",
          },
        ],
      },
    ];

    // setLocalStorageItem('mainPageBanner', mainPageBannerData)
    return mainPageBannerData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de mainPageBanner:", error);
    throw error;
  }
}

// Header Pages
export async function getHeaderPagesData() {
  try {
    // const storeInfoData = await fetchData('/storeInfo')
    const headerPagesData = [
      // {
      //   id: "01",
      //   page: "Home",
      //   url: "/",
      //   subPages: [
      //     {
      //       id: null,
      //       name: null,
      //       url: null,
      //     },
      //   ],
      // },
      {
        id: "02",
        page: "Home",
        url: "/",
        subPages: [
          {
            id: "021",
            name: "Page 01",
            url: "/021",
            banner: "https://picsum.photos/300/200",
          },
          {
            id: "022",
            name: "Page 02",
            url: "/021",
            banner: "https://picsum.photos/300/200",
          },
          {
            id: "023",
            name: "Page 03",
            url: "/021",
            banner: "https://picsum.photos/300/200",
          },
          {
            id: "024",
            name: "Page 04",
            url: "/021",
            banner: "https://picsum.photos/300/200",
          },
        ],
      },
      // {
      //   id: "03",
      //   page: "Home",
      //   url: "/",
      //   subPages: [
      //     {
      //       id: "031",
      //       name: "Page 03",
      //       url: "/031",
      //     },
      //   ],
      // },
    ];

    return headerPagesData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de storeInfo:", error);
    throw error;
  }
}

export async function getBannerHighlightData() {
  try {
    // const storeInfoData = await fetchData('/storeInfo')
    const bannerHighlightData = {
      id: "043567890",
      name: "Categorias",
      banners: [
        {
          id: "0987654345678",
          name: "Games & Setup",
          url: "https://via.placeholder.com/300x200",
          order: 1,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Games & Setup",
          url: "https://picsum.photos/60/60",
          order: 2,
          link: "/categorieOne",
        },
      ],
    };

    return bannerHighlightData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de storeInfo:", error);
    throw error;
  }
}

export async function getCategoriesBannerData() {
  try {
    // const storeInfoData = await fetchData('/storeInfo')
    const cateogiriesBannerData = {
      id: "043567890",
      name: "Categorias",
      categories: [
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 1,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 2,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 3,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 4,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 5,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 6,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 7,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 8,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 8,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 9,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 10,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 11,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 12,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 13,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 14,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 15,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 16,
          link: "/categorieOne",
        },
        {
          id: "0987654345678",
          name: "Carros, Motos e Outros",
          url: "https://picsum.photos/60/60",
          order: 17,
          link: "/categorieOne",
        },
      ],
    };

    return cateogiriesBannerData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de storeInfo:", error);
    throw error;
  }
}

// Product
export async function getProductData({ productId }) {
  try {
    const productData = await fetchData(`products/${productId}`)
    // const productData = {
    //   id: "produto-123",
    //   name: "Bose Phone",
    //   fullName: "Bose Phone Bose Phone Bose Phone Bose Phone",
    //   type: "wholesale",
    //   availability: true,
    //   stock: 100,
    //   info: {
    //     name: "Bose Phone",
    //     fullName: "Bose Phone Bose Phone Bose Phone Bose Phone",
    //     url: "/fpsdjif",
    //     details: "Lorem ipsum",
    //   },
    //   category: {
    //     name: "Phone",
    //     path: "phone",
    //   },
    //   details: "Lorem ipsum",
    //   images: [
    //     {
    //       original: "https://picsum.photos/900/900",
    //       thumbnail: "https://picsum.photos/50/50",
    //     },
    //     {
    //       original: "https://picsum.photos/900/900",
    //       thumbnail: "https://picsum.photos/50/50",
    //     },
    //   ],
    //   price: {
    //     oldPrice: "9.9",
    //     newPrice: "6.9",
    //     installment: {
    //       amount: 12,
    //       value: "7.9",
    //       fees: false,
    //     },
    //   },
    //   skus: [
    //     {
    //       id: "10",
    //       color: {
    //         id: "16",
    //         name: "Azul",
    //         hexCode: "#00f",
    //         amount: 10,
    //       },
    //       size: {
    //         id: "15",
    //         name: "Azul",
    //         hexCode: "#0f0",
    //         amount: 10,
    //       },
    //     },
    //   ],
    //   delivery: {
    //     hasUserLocation: false,
    //     fastDelivery: true,
    //     dayUntilDelivery: {
    //       firstDayExpected: 2,
    //       lastDayExpected: 4,
    //     },
    //     hasPickUpStore: true,
    //     daysUntilPickUpStore: 3,
    //   },
    //   ticket: ["%PRIMEIRA10"],
    //   characteristics: [
    //     {
    //       id: "89",
    //       title: "Característica 1",
    //       description: "Descrição da Característica 1",
    //     },
    //     {
    //       id: "90",
    //       title: "Característica 2",
    //       description: "Descrição da Característica 2",
    //     },
    //     {
    //       id: "91",
    //       title: "Característica 3",
    //       description: "Descrição da Característica 3",
    //     },
    //   ],
    //   reviews: {
    //     id: "oiuyt",
    //     amount: 15,
    //     average: 5,
    //     list: [
    //       {
    //         id: "review-1",
    //         description: "Otimooo produtoooooo",
    //         tags: ["Xis", "Ipsilon"],
    //         likes: 10,
    //         dislikes: 10,
    //       },
    //     ],
    //   },
    //   questions: {
    //     id: "212",
    //     list: [
    //       {
    //         id: "021",
    //         question: "Qual é",
    //         answer: "Resposta",
    //       },
    //     ],
    //   },
    //   bannerFooter: {
    //     id: "",
    //     image: "https://via.placeholder.com/1200x300",
    //     url: "/",
    //   },
    // };

    // setLocalStorageItem('mainPageBanner', mainPageBannerData)
    return productData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de mainPageBanner:", error);
    throw error;
  }
}

// Footer
export async function getFooterSectionsData() {
  try {
    // const productData = await fetchData(`/footer/pages`)
    const footerSectionsData = [
      {
        id: "",
        title: "Section Here",
        pages: [
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
        ],
      },
      {
        id: "",
        title: "Section Here 02",
        pages: [
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
        ],
      },
      {
        id: "",
        title: "Section Here 02",
        pages: [
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
        ],
      },
      {
        id: "",
        title: "Section Here 02",
        pages: [
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
          {
            id: "",
            name: "Nome ajuda",
            link: "",
          },
        ],
      },
      {
        id: "",
        pages: [
          {
            id: "",
            name: "Terms and conditions",
            link: "/institutional/name",
          },
          {
            id: "",
            name: "Privacy and policy",
            link: "/institutional/name",
          },
          {
            id: "",
            name: "Contact us",
            link: "/institutional/name",
          },
        ],
      },
    ];

    return footerSectionsData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de mainPageBanner:", error);
    throw error;
  }
}

// Filters
export async function getFiltersData({ categoryId }) {
  try {
    // const productData = await fetchData(`/footer/pages`)
    const filtersData = [
      {
        id: "filter1",
        title: "Categoria 1",
        options: [
          {
            id: "filter1option1",
            name: "Opção 01",
          },
          {
            id: "filter1option2",
            name: "Opção 02",
          },
        ],
      },
      {
        id: "filter2",
        title: "Categoria 2",
        options: [
          {
            id: "filter2option1",
            name: "Opção 01",
          },
          {
            id: "filter2option2",
            name: "Opção 02",
          },
        ],
      },
    ];

    return filtersData;
  } catch (error) {
    console.error("Ocorreu um erro ao obter dados de mainPageBanner:", error);
    throw error;
  }
}
