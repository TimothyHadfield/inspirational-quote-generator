// Original list of quotes
const allQuotes = [
  "Sometimes I think you might be so sure you’re 1 in a million, that you forget that out there, your only 1 in 11. -Ted Lasso",
  "You’re off to great places, today is your day. Your mountain is waiting, so get on your way. -Dr. Seuss",
  "Be curious. Not judgmental. -Ted Lasso",
  "I like your Christ, I do not like your Christians, your Christians are so unlike your Christ. -Mahatma Gandhi",
  "Whenever you get scared by anything you just do this: you count to three, and then do it. Cuz if you take too long, you’ll start overthinking and you’ll drive yourself crazy.",
  "When you climb so high, at a certain point, you’ll fall, and the fall is steep.",
  "A man without purpose distracts himself with pleasure.",
  "In order to be able to think, you have to risk being offensive. -Jordan Peterson",
  "We buy things we don’t need, with money we don’t have, to impress people we don’t like.",
  "If you can’t beat the fear, just do it scared.",
  "You show me your friends, I will show you your future.",
  "There’s no light without dark, there’s no joy without pain, you can’t have a rainbow without a little rain.",
  "There must exist certain words in a specific order that would explain all of this, but I just can’t ever seem to find them.",
  "It’s nice to be important, but it’s more important to be nice.",
  "I’m dishonest, and a dishonest man you can always trust to be dishonest. Honestly, it’s the honest ones you want to watch out for, because you can never predict when they’ll do something incredibly stupid. -Captain Jack Sparrow",
  "Religion and Government will both exist in greater purity, the less they are mixed together. -James Madison",
  "Some birds aren’t meant to be caged, their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up does rejoice. Still, the place you live in is that much more drab and empty that they’re gone. -Shawshank Redemption",
  "Everything has its wonders, even darkness and silence… and I learn, whatever state I may be in, therein to be content. -Helen Keller",
  "Humility is not thinking less of yourself, but thinking of yourself less. -C.S. Lewis",
  "We have enough on this planet to suit everybody’s need, but not everybody’s greed. -Philip Woolum",
  "They see what they’ve been told to see. -Dune",
  "Albert Einstein remarked, ‘Any man that can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.’",
  "Although I’m not sure exactly what Jim Henson did, whatever it was, it really moved me. -Kermit the Frog",
  "Enjoy every moment. Because a moment is only a moment until it’s gone. Then it becomes a memory.",
  "The truth will set you free, but first it will piss you off.",
  "All animals are created equal, but some are more equal than others.",
  "The principle must be true that for a man who does not cheat, what he believes to be true must determine his action. -Albert Camus, The Myth of Sisyphus",
  "When you’re winning, you’re not as good as you think you are; when you’re losing, you’re not as bad as you think you are.",
  "Preparation and diligence during calm times leads to peace and security during difficult times.",
  "Happiness is not the absence of problems. It’s the ability to deal with them.",
  "Feeling sad after making a decision doesn’t mean it was the wrong decision.",
  "The lesson you struggle with will repeat itself until you learn from it.",
  "The man said, ‘one day I will be king.’ Everyone laughed, except the king.",
  "Pain is inevitable, suffering is optional.",
  "The first time is hard cuz you don’t know how bad it’s gonna hurt, the second time is harder cuz you know exactly how bad it’s gonna hurt. -Nathan Fri",
  "Happiness is reality minus expectations, but if our expectations keep rising, our reality must rise as well. -Elon Musk",
  "The most beautiful thing you can be is yourself.",
  "More people got rich during the gold rush by selling shovels than looking for gold.",
  "For most people, sex is 99% friction and 1% goodwill. Call me old fashioned but I place value on physical intimacy. -Mr. ___ from The Holdovers",
  "She seems busy, she doesn’t want to talk rn… wait, that’s bullshit. Let’s do it.",
  "When you don’t call me and say ‘I’m in the mud’ you deny me the opportunity, the joy, and the honour of sitting in the mud with you.",
  "If you see me in a fight with a bear, pray for the bear.",
  "So many influencers, so little influence.",
  "Don’t offer someone a lecture, when all they need is a hug.",
  "Suffering completely fills the human soul and conscious mind, no matter whether the suffering is great or little.",
  "A lot of problems are only problems because you think they’re problems.",
  "The circular rhythm of progression looks like a spiral, not a circle. It might feel like you’re in the same place, but after every rotation, you move upwards.",
  "We don’t read and write poetry because it’s cute. We read and write poetry because we are members of the human race, and the human race is filled with passion. -Dead Poets Society",
  "Failure isn’t the opposite of success; it’s a part of it.",
  "You can have 1000 problems in life, until you have a health problem. Then, you only have 1 problem.",
  "Don’t ever let someone tell you that you can’t do something. Not even me.",
  "After I’m dead, I’d rather have people ask why I have no monument than why I have one. -Cato the Elder",
  "You go your entire life only pressing one key, anytime you press any other key you go ‘it’s not me,’ but it is you — you’re just pressing keys you’re unfamiliar with."
];

// Make a copy of the quotes to track which ones are left
let remainingQuotes = [...allQuotes];

function newQuote() {
  // If no quotes left, reset the list
  if (remainingQuotes.length === 0) {
    remainingQuotes = [...allQuotes];
  }

  // Pick a random quote from remainingQuotes
  const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
  const quote = remainingQuotes[randomIndex];

  // Remove the used quote so it won’t appear again until reset
  remainingQuotes.splice(randomIndex, 1);

  // Display the quote
  document.getElementById("quote").textContent = quote;
}
