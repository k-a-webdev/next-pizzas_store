import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
  ProductGroupList,
} from "/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" className="font-extrabold">
          All pizzas
        </Title>
      </Container>

      <TopBar />

      <Container className="pb-14 mt-9">
        <div className="flex gap-[60px]">
          {/* Left part */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Right part */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Піци"
                categoryId={0}
                items={[
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                ]}
              />

              <ProductGroupList
                title="Сніданки"
                categoryId={1}
                items={[
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                  {
                    id: 0,
                    name: "Test",
                    imageUrl: "./logo.png",
                    items: [
                      {
                        size: 25,
                        price: 300,
                      },
                      {
                        size: 30,
                        price: 400,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
