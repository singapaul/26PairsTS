export function getFact() {
  const memoryFacts = [
    "Memory is the brain's ability to store, retain, and recall information.",
    "The hippocampus is a key brain structure involved in forming new memories.",
    "There are three main types of memory: sensory memory, short-term memory, and long-term memory.",
    "Sensory memory holds brief sensory information, like what you just saw or heard.",
    "Short-term memory has limited capacity and lasts for a short duration, usually around 20-30 seconds.",
    "Long-term memory can store information for extended periods, potentially a lifetime.",
    "The average person's short-term memory can hold about 7 items, give or take a couple.",
    "The term 'photographic memory' is often used to describe an exceptionally vivid memory, but it's not a scientifically recognized concept.",
    "Emotions can significantly influence memory. We tend to remember emotionally charged events better.",
    "The brain is remarkably energy-efficient. It uses only about 20 watts of power, similar to a dim light bulb.",
    "Sleep plays a crucial role in memory consolidation, helping to transfer information from short-term to long-term memory.",
    "Eidetic memory, often called 'photographic memory,' is extremely rare and occurs in less than 1% of the population.",
    "There's a condition known as Highly Superior Autobiographical Memory (HSAM) where individuals can remember nearly every day of their lives in great detail.",
    "The scent of roses can improve memory performance. This is known as the 'Proust effect.'",
    "Memory recall tends to be better when retrieval conditions match encoding conditions. This is called the 'encoding specificity principle.'",
    "Music can have a powerful impact on memory. Songs from our past can trigger vivid memories.",
    "The brain stores memories in a distributed manner, meaning that multiple brain regions are involved in memory processing.",
    "Chronic stress can have a negative impact on memory, particularly on the hippocampus.",
    "The 'method of loci' is a memory technique where you associate items you want to remember with specific locations.",
    "'Chunking' is a memory strategy where you group information into smaller, manageable chunks.",
    "Our brains filter out most of the information we encounter, allowing us to focus on what's important. This is called 'selective attention.'",
    "The phenomenon where a smell triggers a vivid memory is known as the 'Proust effect.'",
    "'Flashbulb memories' are vivid and detailed memories of emotionally significant events, often inaccurately believed to be highly accurate.",
    "Repetition is a common memory aid. Repeated exposure to information can strengthen memory traces.",
    "The 'serial position effect' suggests that we tend to remember items at the beginning and end of a list better than those in the middle.",
    "Mnemonic devices, like acronyms and rhymes, can help improve memory recall.",
    "Your memory is not like a file cabinet; it's more like a dynamic network of neurons and connections.",
    "The brain can continue to create new neurons in a process called 'neurogenesis,' which can influence memory and learning.",
    "The 'spacing effect' suggests that spacing out your study sessions over time is more effective for memory retention than cramming.",
    "The 'tip-of-the-tongue' phenomenon occurs when you feel like you're about to remember something but can't quite recall it.",
    "The neurotransmitter acetylcholine plays a crucial role in memory formation and recall.",
    "Certain foods, like blueberries and fatty fish, are believed to have memory-boosting properties.",
    "In ancient times, people used memory techniques like the 'method of loci' to memorize long speeches and texts.",
    "'Hindsight bias' is a cognitive bias where people tend to see past events as having been predictable after they have occurred.",
    "'Anterograde amnesia' is the inability to form new long-term memories after a specific event, often associated with brain damage.",
    "The phrase 'use it or lose it' applies to memory. Regular mental activity and challenges can help maintain cognitive function as you age.",
    "'False memory' is a phenomenon where people recall events that never actually happened, often due to suggestion or misinformation.",
    "'Deja vu' is the feeling that you've experienced a situation before, even if it's your first time encountering it.",
    "'Semantic memory' is the part of long-term memory responsible for storing general knowledge and facts.",
    "The ability to remember dreams is often limited because the brain processes and consolidates memories differently during sleep.",
    "The 'Baader-Meinhof phenomenon' is when you suddenly notice something frequently after just learning about it, leading to the illusion of it being more common than it is.",
    "'Source amnesia' is when you remember information but forget where or how you acquired it.",
    "Your memory is heavily influenced by your expectations and beliefs. It can be shaped by what you believe is true.",
    "'Memory palace' is a technique where you associate the items you want to remember with a familiar location, making it easier to recall them.",
    "The 'Zeigarnik effect' is the tendency to remember uncompleted or interrupted tasks better than completed ones.",
    "When you exercise, your brain releases chemicals that can enhance memory and cognitive function.",
    "Children's brains are particularly good at forming new memories, which is why they often learn quickly.",
    "Some people have a condition called 'synesthesia,' where their senses are interconnected, and they may associate colors with numbers or words with tastes.",
    "A study found that chewing gum can improve short-term memory and increase alertness.",
  ];

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();

  // Use modulus operator to cycle through fun facts based on the day of the month
  const selectedFunFactIndex = dayOfMonth % memoryFacts.length;

  return memoryFacts[selectedFunFactIndex];
}
