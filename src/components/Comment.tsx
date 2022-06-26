import { Trash,ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


interface CommentsProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentsProps) {

    const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
onDeleteComment(content)
}

function handleLikeComment() {
    setLikeCount(likeCount + 1 );
}



    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}src="https://github.com/thiagomessias-code.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Messias</strong>
                        <time title="11 de Maio as 08:13" dateTime="2022-05-17">Publicado há 1h</time>

                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>{likeCount}</span>
                        </button>
                </footer>

            </div>
        </div>
    )
}