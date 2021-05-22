import List from "../../components/List/List";
import AppContext from "../../context";

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.article}/>
        )}
    </AppContext.Consumer>
)

export default ArticlesView;