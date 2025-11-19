// Sample project data for the showcase
export const projectsData = [
  {
    id: 1,
    title: "Shopper",
    description: "E-commers Website",
    technologies: ["React", "bootsTrap CSS"],
    image: "https://portfolio-atish.netlify.app/static/media/Shoper-head.e2298f0d2b274a76605d.png",
    githubUrl: "https://github.com/Attu001/SHOPPER",
    liveUrl: "https://shopper-explore-the-collection.netlify.app/",
    category: "Web App",
    status: "Completed"
  },
  {
    id: 2,
    title: "Tomato",
    description: "The Food Ordering Website Tomato is a modern web application designed to provide a seamless food ordering experience.",
    technologies: ["Vue.js", "react.js", "CSS"],
    image: "https://portfolio-atish.netlify.app/static/media/Tomato-head.0358a517be42bc0b5788.png",
    githubUrl: "https://github.com/Attu001/Tomato",
    liveUrl: "https://tomato-the-food-ordering-website.netlify.app/",
    category: "Web App",
    status: "Completed"
  },
  {
    id: 3,
    title: "Harborlight",
    description: "Hotel website Front pages.",
    technologies: ["JavaScript", "css", "Bootstrap"],
    image: "https://portfolio-atish.netlify.app/static/media/Harborlight-head.eb655463168e665a8e9d.png",
    githubUrl: "https://github.com/Attu001/HarborLights",
    liveUrl: "https://attu001.github.io/HarborLights/",
    category: "Dashboard",
    status: "Completed"
  },
  {
    id: 4,
    title: "RebootDash",
    description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
    technologies: ["HTML5", "CSS3", "JavaScript","node.js"],
    
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-demo.com",
    category: "Website",
    status: "Completed"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and user authentication.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240223113231/Online-Chat-Application.webp",
    githubUrl: "https://github.com/username/chat-app",
    liveUrl: "https://chat-demo.com",
    category: "Web App",
    status: "In Progress"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking application with workout plans, progress charts, and social features.",
    technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERISEhIVFRUVExUTFhYYFxsSFxcTFRUXFxgXFhgYHiggGBolHhUXITEhJykrLi4uFx8zODMvNygtLisBCgoKDg0OGhAQFyslICUtKy0xNy4tLy0uLy03LSsuLTcrNi0uKystLy8rLS0tNzArMS03LystMCs3LS0vKy0rK//AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBQQHBv/EAEMQAAICAAMEBQgIBAMJAAAAAAABAhEDEiEEMUFREyJhcZEFQlOBobHR0gYUMlKSk6LBI2KC4YPw8QckM0NjZHKywv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAlEQEBAAIABQMFAQAAAAAAAAAAAQIRAxITITFBUZEFMoHB8SL/2gAMAwEAAhEDEQA/APtIAOigAAAAAAAAAAAv0bHRk3BQF+jHRjcFAWyjKXaKgtlGUbVUFsoyjYqC2UZRsVBbKMo2KgtlGUbFQTlGUCAWykOI2IAAAAAAAAAAAAAAAAAAAAAAAAJjvRBMd6A8207JjSxJOOLlTg0uOWTjSeV6On1r9R535P2un/vnB0+hhv3K9deffXDR9SU3dZW9Lv8AYjpH9yX6fic0c1bDtet7WuG7BiuNve3wteHLXrRvj8CQBmc94G0576eGS7y9FrXJyzdx0CyRpHM6DavTYe70e96b+t3+z1+zBjNN5pJp7tKrsNVOO4ltbqfg2TsS78IAUlyfg1+xfKhsUBMmlvCkqsbhub0gCMk+D8GveXyjYoVxLrR0/E1yozU43Q3C2Qvuru/uWzIhtLg/BsmNPh7GveAbIZMkQyjMAGmgAAAAAAAAAAAAAAAAAAAAAJjvRBMd6AvKUsypKqet8SYOV6pL13+x89+lWz+VXtWO9n+sdHmw+iyYkYxydHDPSclTzZ96OV9U8s8tt/Ow9/ie7D6fMsZl1cZue5p9aIPj31Ty/wD9z+bH5jufQzZ/Ky2uD2rp+iqebPiRlH7Ly6Jt3dF4n06YYXLrYXXtTT6Cy9aFRbPnVl5MHYmsRzvfelc3Zhtfk28Sck8ZZ5YUpZZQq8PdWbctNVxOlbFszysY4THw8PkrZOhTilivNltycNMsFHzX/KtyOkZ2xbLpvam1YOaLV1armZYmy3gzg71w3Hq0pfZrq3onyPRbFsnKzyzm5nFj5GSm5t7Q3n6T7UMreeM6SvRXHdybR3MOVq2mux1fsbRW2LZdN7XaPDh7C1iZs2ltpUtG7u3Vtanrti2TlYywmXl+e8vbA542mHjuLhrLDxFBKTrSqu+ote1HU8mbfi4jaxNnlhVbtyUk9aS048T22xmYmN929rTKsBmkZgA00AAAAAAAAAAAAAAAAAAAAABMd6IJjvQGkou7TpVurj/n3CEXesr9VCULd291ERw6d5n4nNGhBJFAZsy2+eKofwujzf8AUbjHc/uq3rWnKzVlpNVr7rLUc3Ex9qvRbO1rvnJPsVZX4m2zT2lyWeODk4uM5OVU9yca30t+6+49WaPL9L+BpF6afAhNpBTpV2+DLNhUgp0q7fB/AtGV6/2ArjYmVXTfYtWFidjJjNPd7miwFcxKkS2VjNP/AEYGctopXll4ajCx83myXeqNisZp7vc0AmVZaZVliMwAbaAAAAAAAAAAAAAAAAAAAAAAmO9EEx3oDWWGm741Qw4JaL3t+8sDmgRRIAyZOJNpWouT00TS9erRDGLKSSyxzdl1pXaWoosedpdFKnxuNLv61noMMLEm3UsPKq35k9eVG5FeaOPPT+DJa/ejpr3m820m0rdaLdb5GeFObfWhlXPMmaTbSdK3TpbrfKwPPHHxNP4TW/zo6cuJtgybVyi4vlaftRlHFxOOEuPnr4GuBKTXWjlfK83tAx+sT9DP8UPmJ6efoZfih8xXp8X0PD76qzTDxJtq8OlxeZOgNW9Lrhu/Y831jE9DL8UPmPTPc6VutFutmeDObbzQy9ubNYEzxHkcsrury73fLQ50PKGM3TwJJc9TpY7ai3FW60RzIbbtNq8FJc9fiS5SHQz4nfHLXx+3UmQy0yrNxGYANNAAAAAAAAAAAAAAAAAAAAAATHeiCY70BuADmgAAMmMVySWSKk71uWXSt+59gYxnOlkUW7V5m4qvUnqWoy6TG9HD8x/J3G+E3SzJJ8UnmS9dK/Awcsb7uH+KXym+FmpZkk+KTteLS9xFZ4M8RvrQilW9TcnfdlXvNZ3TpW604ameC5286ilwpt33ppV7TSd06q60vdfCwMIzxdLw4cb679XmamuC5NdZJPknmXi0jGPTaWsPjesvVWhtg5q66jf8ttV6wMXiY3o4fmP5BHExeOHBf4jff5gcsbhDD3/flu/B3lsOWLazRw0r1qbenZ1UBvK6dK3WnDXvM8Fyd54qPKpZv2ReV06q60vRX2kYV11kk+x2vFpARjtqLcVbrTvOXDatrtXhQS9bOpjXleXfWnec2E9rvWMK71ZLN+p15w+1w3+HUmVZaZVm4jMAGmgAAAAAAAAAAAAAAAAAAAAAJjvRBMd6A3Bli7RCOkpxj3tL3mMvKeAt+NhL+uPxMzG3xDVesHgl5a2Zb9pwV/iQ+JpsnlPAxW44WNhYjStqE4zaXNpMt4ecm9U1WzJxM1dWr7bqvUQxjKdLI4p6faTkq9TWpmsqQ6S1eTLxq73cPWeg8rjjffw/wS+c9ELpXV8a0V9hFY4XS5utky1wu79ZtiXTy1dOr3XwvsPPGONpc8Pt6klpfDr6aHondOmk60vVX2oDzxWNxeHx4S5acTbBzV18t/y2lXrMYxxuM8Pe76kt1aV1zbAUq67i3fmpxVdzbAxfTV/y7/qEem49H2faZGXH+/hfgl2X5/eTlxvv4f4JfOB6JXTqrrTlfwMsLpL62Sq4Xd+sthqeV5nFy1ppNLstW/eUw1i31pQceyLT8XIDTHvK8v2q07zmw+t3rlr1WdLGvK8r1rTvOasLa7+3Cvb4+BY4cXzPu/DqTKsmXAhljszABpoAAAAAAAAAAAAAAAAAAAAACY70QTHegPzH0hxKxp/0/wDrE4G2YuHzXjLl/wCJ+m2/aI4W14ksXClOListRza5Yq6ej3NHl2ry5s16YM0q3fV4y1vm2fS4Nsk1jb2j03PUk16PxW1YmDxce3Wa/wDllv8AZ9i35Twq0Tji6b9MktO0/Ur6S7FFvPs85LXT6rFcednN8i7Rh7R5awsXZtmnhYUMGam3h9GnLLJZmlovtRXN12Hv6uV4XEmWFk5b3t7eHHLLb6QycRSaWVpPTVrMq7rRDGLCTSyyyvnSlpy1PzdclIwxNLnB8+o1fd1tPaeg8vQ4npf0I9JFZYUZp9acWuSjlfjmfuNJp06dOtHvp86PP0OJ6X9CPRNWnTp1o99PmB544WLxxYvf5nh5xvgppVKWZ86y+wwjgYmn8Z8fNjrp3G2DFpVKTk+dJexAYPDxvSQ/LfzmkYYlq5xavXqNOu/MZvAxfTfoXIlYOJ6X9CA9E7p06daPfT51xK4KkrzSUtdKjlpeLJyvLWbWqzVx50YdDiel/QgNsZNxai6daPtOatl2m/8Aixrlr7zoShLI45utVZvs6+rcc2OwbReuPa5W0S2z0XoY8TvctfLqy4EMmW5EM1EZgA2oAAAAAAAAAAAAAAAAAAAAAEx3ogmO9Ac/G+kOFHaVs1SctE5LK4xlJJxjJXmt3Hh5yOhgbUpOss1pfWi4rxZD2HC6Tpejj0lVnpZq7zToI/dj4I5QuvRoRm1oiEEtEku5UWKjJl3dKq8LKg0hUua8H8SalzXh/cjXmNeZNBUua8H8TQz15jXmNDQGevMa8xoaAz15jXmNDzeVsLHlhTWBiRhiNLJJq0nmV3afC1uNNlw8VYcVOcZTWHFSklo8RLrSrTRvhoa68xrzNb/zy/1U1K96qt3b3kKMtest+mlUuT11faNeY15mdItMqwGUZgA00AAAAAAAAAAAAAAAAAAAAAAAAtnYzsqBoWzsZ2VA0JzDMQAJzDMQAJzDMQAJzDMQAJzDMQAJzDMQAJzDMQAJzCyAAAAAAAAAAAAAAAf/2Q==",
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness-demo.com",
    category: "Mobile App",
    status: "In Progress"
  }
];

export const categories = ["All","Dashboard", "Website"];