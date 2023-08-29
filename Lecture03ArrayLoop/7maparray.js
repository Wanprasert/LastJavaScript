const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
    return member + "joined the contest.";
});

console.log(announcements);

/*[
    'Taylorjoined the contest.',
    'Donaldjoined the contest.',
    'Donjoined the contest.',   
    'Natashajoined the contest.',
    'Bobbyjoined the contest.'
  ]*/