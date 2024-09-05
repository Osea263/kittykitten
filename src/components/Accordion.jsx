import { useState, React} from 'react'
import '../App.css'

const data=[
    {
        question: 'What is Kitty Kitten?',
        answer: 'Kitty Kitten is a ffun and engaging NFT project where adorable, collectible kitten-themed NFTs meet the exciting world of blockchain. Our project offers unique digital art, communty engagment, and exclusive token rewards through airdrops, staking, and more'
    },
    {
        question: 'How can I get a Kitty Kitten NFT',
        answer: 'YOu can mint a Kitty Kitten NFT during our free mint event if you are on the whitelist, or participate in the public sale for  small fee. Stay tuned on our social media channels for updates on how to get whitelisted!'
    },
    {
        question: 'What is the Purpose of Kitty Token?',
        answer: 'The Kitty Token is the native utitlity token of the Kitty Kitten ecosystem. It is used for staking, governance, purchase exclusive NFTs, and participating in community events. Kitty tokens can also be earned through airdrops and engagement within the community'        
    },
    {
        question: 'What is the difference between a whitelisted mint and a public mint',
        answer: 'A whitelisted mint is an exclusive event where selected community member can mint a Kitty Kitten NFT for free. The public mint is open to everyone and requires a small fee. Being on the whitelist gives you early access and guarantees your chance to mint'

    },
    {
        question: 'How can I get Whitelisted',
        answer: 'You an get whitelisted by participating in our task-based contests, angaging with our community, or being an early supporter of th project. Keep an eye on our social media for opportunities to join the whitelist!'        
    },
    {
        question: 'What makes Kitty Kitten NFTs unique?',
        answer: 'Each Kitty Kitten NFT is a one-of-a-kind digital collectible with unique traits and designs. They are not just Cute and Fun; they also unlock special perks within our own ecosystem, inclus=ding token reward, ec=xclusive content and more'        
    }
]

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if ( selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <div className='flex justify-center items-center max-w-5xl mx-auto flex-col mt-12'>
        <h2 className='font-semibold leading-7 text-indigo-600 text-5xl mb-12'>FAQ</h2>
        <div className=' flex justify-center w-full flex-col items-center'>
            {data.map((item, i) =>(
                <div key={i} className='mb-1 p-10 bg-gray-200'>
                    <div className='title flex justify-between items-center text-left cursor-pointer ' onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span className='text-indigo-600'>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Accordion