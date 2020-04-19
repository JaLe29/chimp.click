import React from "react";
import Comments from "./comments";

export default {
	title: "Comments"
};

export const Primary = () => <Comments
	authKey={'a355c9c98b713de64f17d488cf465c69e8b624c4c1e347693108afc901baebe2'}
	code={'/test'}
	users={{}}
	user={'Jakub'}
	authenticationType={'simple'}
	direction={'bottom'}
	messageHeaderClassName={''}
	messageTextClassName={''}
	textAreaClassName={''}
	messagesAreaClassName={''}
	wrapperClassName={''}
	showMessageTime={false}
	hasSendButton={true}
/>;
