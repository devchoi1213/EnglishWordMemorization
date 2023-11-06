import React, {useEffect, useState} from "react";
import LoginButton from "./components/loginContainer/LoginButton";
import styled from "styled-components";
import './contentScript.css';
import CategoryContainer from "./components/categoryContainer/CategoryContainer";
import ContentContainer from "./components/contentContainer/ContentContainer";

const categories = [
	{
		id: 1, category: 'category1', vocaCount: 100, vocas: [
			{id: 1, english: 'category1-voca1', meaning: 'meaning1'},
			{id: 2, english: 'category1-voca2', meaning: 'meaning2'},
			{id: 3, english: 'category1-voca3', meaning: 'meaning3'},
			{id: 4, english: 'category1-voca4', meaning: 'meaning4'},
			{id: 5, english: 'category1-voca5', meaning: 'meaning5'},
		]
	},
	{
		id: 2, category: 'category2', vocaCount: 100, vocas: [
			{id: 1, english: 'category2-voca1', meaning: 'meaning1'},
			{id: 2, english: 'category2-voca2', meaning: 'meaning2'},
			{id: 3, english: 'category2-voca3', meaning: 'meaning3'},
			{id: 4, english: 'category2-voca4', meaning: 'meaning4'},
			{id: 5, english: 'category2-voca5', meaning: 'meaning5'},
		]
	},
	{
		id: 3, category: 'category3', vocaCount: 100, vocas: [
			{id: 1, english: 'category3-voca1', meaning: 'meaning1'},
			{id: 2, english: 'category3-voca2', meaning: 'meaning2'},
			{id: 3, english: 'category3-voca3', meaning: 'meaning3'},
			{id: 4, english: 'category3-voca4', meaning: 'meaning4'},
			{id: 5, english: 'category3-voca5', meaning: 'meaning5'},
		]
	},
	{
		id: 4, category: 'category4', vocaCount: 100, vocas: [
			{id: 1, english: 'category4-voca1', meaning: 'meaning1'},
			{id: 2, english: 'category4-voca2', meaning: 'meaning2'},
			{id: 3, english: 'category4-voca3', meaning: 'meaning3'},
			{id: 4, english: 'category4-voca4', meaning: 'meaning4'},
			{id: 5, english: 'category4-voca5', meaning: 'meaning5'},
		]
		
	},
	{
		id: 5, category: 'category5', vocaCount: 100, vocas: []
	},
]

const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

function contentScript() {
	const [user, setUser] = useState(null);
	const [isExtensionOpened, setIsExtensionOpened] = useState(false);
	const [isSidebarOpened, setIsSidebarOpened] = useState(false);
	const [category, setCategory] = useState([]);
	const [curCategory, setCurCategory] = useState(null);
	
	useEffect(() => {
		const handleMessage = (request, sender, sendResponse) => {
			setIsExtensionOpened(!isExtensionOpened);
		}
		
		// Register the listener
		chrome.runtime.onMessage.addListener(handleMessage);
		
		// Cleanup function to remove the listener
		return () => {
			chrome.runtime.onMessage.removeListener(handleMessage);
		};
	}, [isExtensionOpened]);
	
	useEffect(() => {
		// Function to fetch data from the API
		const fetchCategoryData = async () => {
			try {
				// API call 로직으로 전환할 것
				setCategory(categories);
				if (categories.length > 0) {
					setCurCategory(categories[0]);
				}
			} catch (error) {
				console.error('Error fetching data: ', error);
			}
		};
		
		fetchCategoryData();
	}, []);
	
	const handleClick = () => {
		chrome.runtime.sendMessage('login', (response) => {
			setUser(true);
		});
	}
	
	const handleHamburgerClick = () => {
		setIsSidebarOpened(!isSidebarOpened);
	}
	
	const handleCategoryClick = (categoryId: number) => {
		setCurCategory(category.filter(el => el.id === categoryId)[0]);
	}
	
	return (
		<div className={`voca-mastery-wrapper ${isSidebarOpened ? 'sidebar-show' : ''} ${isExtensionOpened ? 'show' : ''} `}>
			{user ? (
				<div className={'voca-mastery-app-container  w-full h-full flex-col'}>
					<CategoryContainer categories={category} isSideBarOpened={isSidebarOpened} curCategory={curCategory} handleCategoryClick={handleCategoryClick}/>
					<ContentContainer handleHamburgerClick={handleHamburgerClick} curCategory={curCategory} vocas={curCategory.vocas} />
				</div>
			) : (
				<div className={'voca-mastery-login'}>
					<h1 className={'font-bold text-center text-6xl'}>Voca Mastery</h1>
					<StyledButton>
						<LoginButton onClick={handleClick}/>
					</StyledButton>
				</div>
			)}
		</div>
	)
}

export default contentScript;