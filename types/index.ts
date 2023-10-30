export type IPopularCars = {
  makeList: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
  pagination: {
    total: number;
    currentPage: number;
    pageSize: number;
  };
};
export type ICar = {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
  ccMeasurement: number;
};

export type ICarListApiResponse = {
  result: ICar[];
  pagination: {
    total: number;
    currentPage: number;
    pageSize: number;
  };
};

export type ICarDetails = {
  features: [];
  carFeatures: [];
  modelFeatures: [];
  damageMedia: [];
  id: string;
  year: number;
  insured: boolean;
  mileage: number;
  vin: string;
  marketplacePrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  isFeatured: boolean;
  imageUrl: string;
  model: {
    modelFeatures: [];
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    make: {
      id: number;
      name: string;
      imageUrl: string;
    };
    popular: boolean;
  };
  state: string;
  country: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: string;
  bodyType: {
    id: 8;
    name: string;
    imageUrl: string;
  };
  city: string;
  marketplaceOldPrice: number;
  createdAt: string;
  updatedAt: string;
  mileageUnit: string;
  hasWarranty: boolean;
  hasFinancing: boolean;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  sold: boolean;
  hasThreeDImage: boolean;
  inspectorDetails: {
    inspectedMakes: {
      count: number;
      name: string;
      imageUrl: string;
    }[];
    inspectorFullName: string;
    totalInspection: number;
    profileImageUrl: string;
  };
  carName: string;
  financingSettings: {
    loanCalculator: {
      loanPercentage: number;
      ranges: {
        minInterestRate: number;
        maxInterestRate: number;
        minDownPayment: number;
        maxDownPayment: number;
        tenure: number;
      };
      defaultValues: {
        interestRate: number;
        downPayment: number;
        tenure: number;
      };
    };
  };
  ccMeasurement: number;
};

export type ICarMedia = {
  carMediaList: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
    type: string;
  }[];
  pagination: {
    total: number;
    currentPage: number;
    pageSize: number;
  };
};
