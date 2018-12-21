import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';


const colors = [
    red, pink, blue, green, lightGreen, orange, blueGrey
];

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

      const colorIndex = index % colors.length;
      return colors[colorIndex][500];
  }
  catch (e) {
    console.log(e);
    return blueGrey[500];
  }
}
