import {Avatar} from './Avatar'
import {Comment} from './Comment'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react'


interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface Content {
    type: 'paragraph'| 'link',
    content: string
}


export function Post({author, publishedAt, content}: PostProps) {

    // Função set monitora e avisa mudanças occoridas na variavel para o React
    const [comments, setComments] = useState(['Post muito bacana hein!?'])

    const [newCommentText, setNewCommentText] = useState("")
    console.log(newCommentText)

    //Date

    const publishDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'ás' HH:mm'h'",
        {locale: ptBR}
    )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        
        //imutabilidade ...Spread copia todos o valores da variavel
        setComments([
            ...comments,
            newCommentText
        ]);
        setNewCommentText("");

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function  handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    function deleteComment(commentToDelete: String) {
        console.log(commentToDelete)
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(item => {
                        if (item.type === 'paragraph') {
                            return <p key={item.content}>{item.content}</p>
                        } else if (item.type === 'link') {
                            return <p key={item.content}>
                                <a href="">{item.content}</a>
                            </p>
                        }
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu Cometario</strong>
                <textarea
                required
                onInvalid=
                 {handleNewCommentInvalid}
                
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    name="comment"
                    placeholder='Deixe um Comentario'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comentario => {
                        return <Comment onDeleteComment={deleteComment} key={comentario} content={comentario}/>
                    })
                }
            </div>
        </article>
    )
}