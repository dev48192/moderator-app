export const fetchCategories = async () => {
  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    data: {
      category_id: "123",
      category_code: "",
      category_name: "All Categories",
      status: "PUBLISHED",
      published: {
        best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
        upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
        eco_picks: ["B0C35G845", "B0C35G8X11"],
      },
      staging: {
        best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
        upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
        eco_picks: ["B0C35G845", "B0C35G8X11"],
      },
      childs: [
        {
          category_id: "1234",
          category_code: "",
          category_name: "Appliances",
          status: "DRAFT",
          published: {
            best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
            upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
            eco_picks: ["B0C35G845", "B0C35G8X11"],
          },
          staging: {
            best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
            upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
            eco_picks: ["B0C35G845", "B0C35G8X11"],
          },
          childs: [],
        },
        {
          category_id: "",
          category_code: "",
          category_name: "Gaming",
          status: "DRAFT",
          published: {
            best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
            upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
            eco_picks: ["B0C35G845", "B0C35G8X11"],
          },
          staging: {
            best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
            upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
            eco_picks: ["B0C35G845", "B0C35G8X11"],
          },
          childs: [
            {
                category_id: "",
                category_code: "",
                category_name: "Cricket",
                status: "DRAFT",
                published: {
                  best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
                  upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
                  eco_picks: ["B0C35G845", "B0C35G8X11"],
                },
                staging: {
                  best_picks: ["B0C35G8XB8", "B0C35G8XB8"],
                  upgrade_picks: ["B0C35G8XB9", "B0C35G8X10"],
                  eco_picks: ["B0C35G845", "B0C35G8X11"],
                },
                childs: [],
              }
          ],
        },
      ],
    },
  };
};
