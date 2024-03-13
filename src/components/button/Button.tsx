import Link from 'next/link'
import styles from './button.module.css'
 
type ButtonProps = {
    text: string,
    url : string
}

const Button: React.FC<ButtonProps> = ({text,url}) => {
  return (
    <div>
        <Link href={url}>
        <button className={styles.button}>{text}</button>
        </Link>
    </div>
  )
}

export default Button
