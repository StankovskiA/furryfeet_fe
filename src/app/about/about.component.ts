import { Component } from "@angular/core";

const dogFacts: string[] = [
  "Dogs have an exceptional sense of smell, about 1,000 times more powerful than humans.",
  "A dog's nose print is unique, much like a person's fingerprint.",
  "Dalmatians are born completely white and develop their spots as they grow.",
  "Dogs have three eyelids: an upper lid, a lower lid, and a third lid called a haw that helps protect their eyes.",
  "The world's smallest dog breed is the Chihuahua, while the largest is the Great Dane.",
  "Dogs have a specialized region in their brains for processing human faces.",
  "A dog's sense of hearing is four times more sensitive than a human's.",
  "Some dogs can learn over 1,000 words and commands.",
  "Dogs sweat through their paws rather than their bodies like humans.",
  "The average dog can run at speeds of up to 19 miles (30 kilometers) per hour."
];

function getRandomFact(exclude: string): string {
  let randomIndex: number;
  let fact: string;

  do {
    randomIndex = Math.floor(Math.random() * dogFacts.length);
    fact = dogFacts[randomIndex];
  } while (fact === exclude);

  return fact;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  cardText1: string = getRandomFact('');
  cardText2: string = getRandomFact(this.cardText1);
}