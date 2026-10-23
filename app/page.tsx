import CardStyle from "@/app/components/cardStyle";
import CriticalJudgeButton from "@/app/components/criticalJudgeButton";
import TurnOrderButton from "@/app/components/turnOrderButton";
export default function Home() {
  return (
    <div className="h-screen bg-[url('/images/backgroundimage.jpg')] bg-cover bg-center flex justify-center">
      <div className="w-1/3 min-w-80 h-full flex flex-col bg-background shadow-2xl">
      <div className="shrink-0 p-4">
        <h2>先攻後攻ジェネレーター</h2>
        <TurnOrderButton />
        <h2>クリティカルジャッジ</h2>
        <CriticalJudgeButton />
      </div>
      <main className="flex-1 overflow-y-auto p-4">
        <div>マス詳細</div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <CardStyle 
              CardNames="装備" 
              Descriptions="様々なバフを与える" 
              ImageLink="/images/weapon.jpg"
            />
          </div>
          <div>
            <div>仲間マス</div>
            <div>画像</div>
            <div>詳細</div>
          </div>
          <div>
            <div>エンカウントマス</div>
            <div>画像</div>
            <div>詳細</div>
          </div>
          <div>
            <CardStyle 
              CardNames="階段マス" 
              Descriptions="階層ボスと強制バトルを行い勝ったら階段を上ることが出来る" 
              ImageLink="/images/upstear.jpg"
            />
          </div>
          <div>
            <div>回復マス</div>
            <div>画像</div>
            <div>詳細</div>
          </div>
        </div>
        <div>味方の詳細</div>
        <div className="grid grid-cols-3 gap-3">
          <div >
            <CardStyle 
              CardNames="僧侶" 
              Descriptions="体力＋" 
              ImageLink="/images/souryo.jpg"
            />
          </div>
          <div>
            <CardStyle 
              CardNames="魔術師" 
              Descriptions="攻撃力＋振れるさいころ＋１" 
              ImageLink="/images/caster.jpg"
            />
          </div>
          <div>
            <CardStyle 
              CardNames="戦士" 
              Descriptions="攻撃力＋振れるさいころ＋１" 
              ImageLink="/images/wallear.jpg"
            />
          </div>
        </div>
        <div>敵の詳細</div>
        <div>
          <div className="grid grid-cols-3 gap-3">
            <div>
            <CardStyle 
              CardNames="F1階層雑魚敵" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F1zako.png"
            />
            </div>
            <div>
            <CardStyle 
              CardNames="F2階層雑魚敵" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F2zako.png"
            />
            </div>
            <div>
            <CardStyle 
              CardNames="F3階層雑魚敵" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F3zako.png"
            />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
            <CardStyle 
              CardNames="F1階層階層ボス" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F1boss.png"
            />
            </div>
            <div>
            <CardStyle 
              CardNames="F2階層階層ボス" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F2boss.png"
            />
            </div>
            <div>
            <CardStyle 
              CardNames="F3階層階層ボス" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/F3boss.png"
            />
            </div>
          </div>
          <div>
            <CardStyle 
              CardNames="ラストボス" 
              Descriptions="攻撃力:体力:速度:" 
              ImageLink="/images/lastboss.png"
            />
          </div>
        </div>

      </main>
      </div>
    </div>
  );
}
