import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { productContext } from '../../contexts/ProductsContext';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({item, history}) {
  const classes = useStyles();
  const {deleteProduct} = useContext(productContext)



  let icons = (
    <CardActions disableSpacing>
      <Link to={`/edit/${item.id}`} style={{color: 'black', textDecoration: 'none'}}>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton aria-label="share" onClick={() => deleteProduct(item.id, history)}>
          <DeleteIcon />
      </IconButton>

    </CardActions>
  )

  return (
    <Card className={classes.root}>
      <Link to={`/detail/${item.id}`} style={{textDecoration:'none', color: 'black'}}>
        <CardHeader
          title={item.title}
          subheader={item.type}
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.price}
        </Typography>
      </CardContent>
      {icons}
    </Card>
  );
}
