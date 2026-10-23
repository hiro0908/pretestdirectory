import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
type CardStyle = {
  CardNames?: string;
  Descriptions?: string;
  ImageLink?: string;
};

export default function CardStyle({
  CardNames = "カード名",
  Descriptions = "説明",
  ImageLink = "/images/weapon.jpg",
}: CardStyle) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ImageLink}
          alt={CardNames}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {CardNames}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Descriptions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
