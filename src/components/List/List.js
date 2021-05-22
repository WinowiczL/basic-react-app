import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({items}) => (
    <>
        {items.length ? (
            <ul>
                {items.map(item => (
                    <ListItem {...item} key={item.title}/>
                ))}
            </ul>
        ) : (
            <h1 className={styles.noItems}>There's nothing yet, please add some items!</h1>
        )}
    </>

)

export default List;
