export type RestoCardProps = {
  restoId: string;
  basicDetails: {
    name: string;
    description?: string;
    location: {
      area?: string;
      city?: string;
    };
    rating?: string;
    category: string;
    registrationNo: string;
    owner: {
      name: string;
      email: string;
    };
  };
  menuDetails: [
    { name: string; price: string; rating?: string; description?: string }
  ];
};
