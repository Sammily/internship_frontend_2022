const url = 'https://hacker-news.firebaseio.com/v0';

export async function getNewStories() {
  try {
    const response = await fetch(`${url}/newstories.json`, {
      method: 'GET',
    });
    if (response.status === 200) {
      const stories = await response.json();
      return stories;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStory(id: number) {
  try {
    const response = await fetch(`${url}/item/${id}.json`, {
      method: 'GET',
    });
    if (response.status === 200) {
      const stories = await response.json();
      return stories;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
