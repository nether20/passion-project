import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <h1>Hey there!</h1>
      <h2>Wanna play some games? You're at the right place!</h2>
      <div className="gamecards">
      <Card
        imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
        imgalt="Tic-Tac-Toe Image"
        heading="Tic-Tac-Toe"
        description="A quick, fun game of tic-tac-toe"
        link="/tic-tac-toe"
      />
      </div>
    </>
  );
}
