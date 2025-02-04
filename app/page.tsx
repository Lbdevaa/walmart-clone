import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="1 Sweet gifts"
          image="https://i.imgur.com/5V4wehM.png"
          className="bg-blue-400 h-full md:h-32"
        />
        <GridOption
          title="2 Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="3 Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="4 Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="5 Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="6 All you need for Match Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="7 Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="8 Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="9 Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="10 Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="11 Flash Deals"
          image="https://links.papareact.com/qx7"
          className="bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
