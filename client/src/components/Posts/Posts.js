import React, { useContext, useMemo } from 'react'
import {
  Grid,
  CircularProgress,
  LinearProgress, Container, Grow,
} from '@material-ui/core'
import badGateway from '../../images/badGataway.jpeg'
import { StateContext } from "../../state/context";
import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ creator }) => {
  const classes = useStyles()

  const { post } = useContext(StateContext);
  const { fetching: isPending, error, posts: postsBeforeSearch, search } = post;
  const thisCreatorsPosts = useMemo(() =>
    creator ? postsBeforeSearch.filter(p => p.creator === creator) : postsBeforeSearch
    , [creator, postsBeforeSearch])
  const posts = useMemo(() =>
    thisCreatorsPosts
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        const dateA = Date.parse(a.createdAt)
        const dateB = Date.parse(b.createdAt)

        return dateA - dateB
      })
    , [search, thisCreatorsPosts])

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={6}
        >
          <Grid item xs={12} sm={12}>
            {isPending && posts.length === 0
              ? <CircularProgress />
              : (
                <>
                  <div>
                    {error && <LinearProgress>502 Bad Gateway</LinearProgress>}
                    {error && (
                      <img
                        className={classes.image}
                        src={badGateway}
                        alt="error"
                      />
                    )}
                  </div>
                  <Grid
                    className={classes.container}
                    container
                    alignItems="stretch"
                    spacing={6}
                  >
                    {posts.map((post) => (
                      <Grid key={post._id} item xs={12} sm={6} md={3} lg={3}>
                        <Post post={post} />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
          </Grid>
        </Grid>
      </Container>
    </Grow>

  )
}

export default Posts
