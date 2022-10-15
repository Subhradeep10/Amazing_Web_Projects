import { useState } from 'react'
import './tag.css'

const TagsInput = () => {
    const [tags, setTags] = useState(['sample', 'URLs'])

    const handleKeyDown = (e: any) => {
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    const removeTag = (index: number) => {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input type="text" tabIndex={0} onKeyDown={handleKeyDown} className="tags-input" placeholder="Type something" />
        </div>
    )
}

export default TagsInput