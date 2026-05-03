//  Generic With Interface 

interface Developer<T, X = null> {
      name: string;
      salary: number;
      device: {
            brand: string;
            model: string;
            releasedYear: string;
      };
      smartWatch: T;
      bike?: X;
};


interface BrandCharaWatch {
      heartRate: string;
      stopWatch: boolean;
}

const poorDeveloper: Developer<
      BrandCharaWatch,
      { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
      name: "Sefat",
      salary: 100,
      device: {
            brand: "samsung",
            model: "samsung galaxy s20",
            releasedYear: "2020",
      },
      smartWatch: {
            heartRate: "100 bpm",
            stopWatch: true
      }

}

interface AppleWatch {
      heartRate: string;
      calling: boolean;
      calcuter: boolean;
      AiFeatures: boolean
}

const richDeveloper: Developer<AppleWatch> = {
      name: "John",
      salary: 1000,
      device: {
            brand: "apple",
            model: "apple iphone 12",
            releasedYear: "2022",
      },
      smartWatch: {
            heartRate: "120 bpm",
            calling: false,
            calcuter: true,
            AiFeatures: true,

      },
      bike: null,

}

const add = (num1: number, num2: number =0)=> num1 + num2;
add(5);

// explore the generic with function interface 