// Grab values from the submitted form in the URL

const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals

function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story

const adj1 = words.get('adj-1');
const litre1 = words.get('litre-1');
const engine1 = words.get('engine-1');
const hp1 = words.get('hp-1');
const num1 = words.get('num-1');
const size1 = words.get('size-1');
const tors1 = words.get('tors-1');
const size2 = words.get('size-2');
const wheel1 = cleanAndCap(words.get('wheel-1'));
const height1 = words.get('height-1');
const doors1 = words.get('doors-1');
const part1 = words.get('part-1');
const num2 = words.get('num-2');
const transm1 = words.get('transm-1');
const adj2 = words.get('adj-2');

const message = words.get('message');

// The string containing HTML and text which will populate the story.html page

const story = 
`
<p>Your Lamborghini Hurican is the most <span class="word" title="id: adj-1">${adj1}</span> Lamborghini Hurican to ever exist. It comes with a <span class="word" title="id: litre-1">${litre1}</span> litre <span class="word" title="id: engine-1">${engine1}</span> engine that pushes <span class="word" title="id: hp-1">${hp1}</span> horsepower and <span class="word" title="id: num-1">${num1}</span>, <span class="word" title="id: size-1">${size1}</span>-inch <span class="word" title="id: tors-1">${tors1}</span>'s. The outside of your Lamborghini Hurican comes with a <span class="word" title="id: size-2">${size2}</span>-inch spoiler, very <span class="word" title="id: wheel-1">${wheel1}</span> wheels, and suspension that is <span class="word" title="id: height-1">${height1}</span> inches off of the ground. The layout of this car is a <span class="word" title="id: doors-1">${doors1}</span>-door hypercar with a <span class="word" title="id: part-1">${part1}</span>. Lastly the transmission od this car is a <span class="word" title="id: num-2">${num2}</span>-speed <span class="word" title="id: transm-1">${transm1}</span> transmission with a very <span class="word" title="id: adj-2">${adj2}</span> shift time. </p>
<br/>
<br/>
<center>
<table>
	<thead>
		<tr class="center">
			<th class="tableborder">
				<h3>Engine</h3>
			</th>
			<th class="tableborder">
				<h3>Power</h3>
			</th>
			<th class="tableborder">
				<h3>Transmission</h3>
			</th>
			<th class="tableborder">
				<h3>Gears</h3>
			</th>
		</tr>
	</thead>
	<tbody>
		<tr class="center">
			<td class="tableborder">
				<h4><span class="word" title="id: hp-1">${hp1}</span> litre <span class="word" title="id: engine-1">${engine1}</span> engine</h4>
			</td>
			<td class="tableborder">
				<h4><span class="word" title="id: hp-1">${hp1}</span> horsepower</h4>
			</td>
			<td class="tableborder">
				<h4><span class="word" title="id: transm-1">${transm1}</span> transmission</h4>
			</td>
			<td class="tableborder">
				<h4><span class="word" title="id: num-2">${num2}</span>-speed</h4>
			</td>
		</tr>
	</tbody>
	<tfoot>
		<tr class="center">
			<td  class="tableborder" colspan="4">
				<h5>Thank you for making your Lamborghini Hurican with us!</h5>
			</td>
		<tr>
	</tfoot>
</table>
</center>
<br/>
<br/>
`;

// Grabbing the title element

const title = document.getElementById('title');
// Populating the title element with text

title.innerHTML = `Your <span class="word" title="id: adj-1">${adj1}</span> Lamborghini Hurican!`;

// Grabbing the story element

const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable

storyEl.innerHTML = story;

// Grabbing the moral-message element

const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text

moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;
